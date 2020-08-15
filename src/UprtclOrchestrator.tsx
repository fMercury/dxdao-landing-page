import { MicroOrchestrator } from '@uprtcl/micro-orchestrator';

import {
    EveesModule,
    EveesEthereum,
    OrbitDBConnection,
    EveesOrbitDB,
} from '@uprtcl/evees';
import { IpfsStore } from '@uprtcl/ipfs-provider';

import { EthereumConnection } from '@uprtcl/ethereum-provider';

import { ApolloClientModule } from '@uprtcl/graphql';
import { DiscoveryModule } from '@uprtcl/multiplatform';

type version = 1 | 0;

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

        const evees = new EveesModule([ethEvees, odbEvees], odbEvees);

        const modules = [
            new ApolloClientModule(),
            new DiscoveryModule([odbEvees.store.casID]),
            evees,
        ];

        try {
            await this.orchestrator.loadModules(modules);
        } catch (e) {
            console.error(e);
        }
    }

    private static _instance: UprtclOrchestrator;

    public static getInstance(config?: any) {
        return this._instance || (this._instance = new this());
    }
}
