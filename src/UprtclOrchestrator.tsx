import {
    MicroOrchestrator,
    i18nextBaseModule,
} from '@uprtcl/micro-orchestrator';

import {
    EveesModule,
    EveesEthereum,
    OrbitDBConnection,
    EveesOrbitDB,
    EveesHelpers,
} from '@uprtcl/evees';
import { DocumentsModule } from '@uprtcl/documents';
import { WikisModule } from '@uprtcl/wikis';
import { IpfsStore } from '@uprtcl/ipfs-provider';

import { EthereumConnection } from '@uprtcl/ethereum-provider';

import { ApolloClientModule } from '@uprtcl/graphql';
import { DiscoveryModule } from '@uprtcl/multiplatform';
import { CortexModule, Entity, HasChildren } from '@uprtcl/cortex';
import { AccessControlModule } from '@uprtcl/access-control';

type version = 1 | 0;

export let dxDaoData = {};

const getTextNodeRec = async (client: any, recognizer: any, uref: string) => {
    const node = await EveesHelpers.getData(client, recognizer, uref);

    const children = await Promise.all(
        node.object.links.map((child) =>
            getTextNodeRec(client, recognizer, child)
        )
    );
    node.object.links = children;

    return node;
};

const getWikiData = async (client: any, recognizer: any, uref: string) => {
    const wiki = await EveesHelpers.getData(client, recognizer, uref);
    const pages = await Promise.all(
        wiki.object.pages.map((page) =>
            getTextNodeRec(client, recognizer, page)
        )
    );

    wiki.object.pages = pages;
    return wiki;
};

export default class UprtclOrchestrator {
    orchestrator: MicroOrchestrator;
    config: any;

    constructor() {
        this.config = {};

        this.config.eth = {
            host: '',
        };

        // this.config.ipfs.http = { host: 'localhost', port: 5001, protocol: 'http' };
        this.config.ipfs = {
            http: {
                host: 'ipfs.intercreativity.io',
                port: 443,
                protocol: 'https',
            },
            cid: {
                version: 1 as version,
                type: 'sha2-256',
                codec: 'raw',
                base: 'base58btc',
            },
            jsipfs: {
                config: {
                    Addresses: {
                        Swarm: [
                            '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                            '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                            '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/',
                        ],
                    },
                },
            },
        };
    }

    async load() {
        this.orchestrator = new MicroOrchestrator();
        const ipfsStore = new IpfsStore(
            this.config.ipfs.http,
            this.config.ipfs.cid
        );
        await ipfsStore.ready();

        const ethConnection = new EthereumConnection({
            provider: this.config.eth.host,
        });

        await ethConnection.ready();

        const orbitDBConnection = new OrbitDBConnection(ipfsStore, {
            params: this.config.ipfs.jsipfs,
        });
        await orbitDBConnection.ready();

        const odbEvees = new EveesOrbitDB(
            ethConnection,
            orbitDBConnection,
            ipfsStore,
            this.orchestrator.container
        );

        const ethEvees = new EveesEthereum(
            ethConnection,
            ipfsStore,
            this.orchestrator.container
        );

        await ethEvees.ready();

        const evees = new EveesModule([ethEvees, odbEvees], odbEvees);

        const modules = [
            new i18nextBaseModule(),
            new ApolloClientModule(),
            new AccessControlModule(),
            new CortexModule(),
            new DiscoveryModule([odbEvees.store.casID]),
            new DocumentsModule(),
            new WikisModule(),
            evees,
        ];

        try {
            await this.orchestrator.loadModules(modules);
        } catch (e) {
            console.error(e);
        }

        const client = this.orchestrator.container.get<any>(
            ApolloClientModule.bindings.Client
        );
        const recognizer = this.orchestrator.container.get<any>(
            CortexModule.bindings.Recognizer
        );

        dxDaoData = await getWikiData(
            client,
            recognizer,
            'zb2rhdJBj6Bwp4QJvfNidYC3LjPkznnEJNn9JB1w3tKU95xEi'
        );

        console.log({ dxDaoData });
    }

    private static _instance: UprtclOrchestrator;

    public static getInstance(config?: any) {
        return this._instance || (this._instance = new this());
    }
}
