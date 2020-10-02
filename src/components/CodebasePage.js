import React from 'react';
import styled from 'styled-components';
import MetaTags from 'react-meta-tags';

const Headline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

const Subheadline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 60px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

///////

const ProjectsTable = styled.div`
    margin-top: 10px;
`;

const ProjectsHeading = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    color: #999999;
    font-family: Source Sans Pro;
    font-weight: 600;
`;

const ProjectItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 14px 20px 8px 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    color: #333333;
    font-family: Source Sans Pro;
    font-weight: 600;
    border-top: 0px;
    :last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
`;

const ProjectName = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-right: 5px;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;

const ProjectRepo = styled.div`,
  display: flex;
  flex-direction: column;
  width:30%;
  @media (max-width: 1024px) {
    text-align:center;
  }
`;

const ProjectRepoMobileHidden = styled.span`,
display: flex;
  @media (max-width: 1024px) {
    display:none;
    color: #ff0000;
  }
`;

const ProjectVersion = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;
const ProjectLinks = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    color: #999999;
    @media (max-width: 1024px) {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
`;

const Icon = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 12px;
    margin-top: 3px;
    :hover {
        -webkit-filter: brightness(90%);
    }
`;

///////

const CodebaseSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1024px) {
        margin-top: 0px;
    }
`;

const projects = {
    official: [
        {
            name: 'openraise-dapp',
            github: 'https://github.com/levelkdev/openraise-dapp',
            ipfs:
                'https://gateway.ipfs.io/ipfs/QmUJKG2kjQYrsGmkyCR2NVcoif8nXRa8uCARoZWuoZuNxV',
            version: '0.2.3',
            links:
                '<a href="https://alchemy.daostack.io/dao/0x519b70055af55a007110b4ff99b0ea33071c720a/proposal/0xc10a5bbf78e0013dae5d62b4b6dbb174be8cfc6c3e7c3a48869565349162a276" target="_blank" rel="noopener noreferrer">Proposal #1</a>, <a href="https://alchemy.daostack.io/dao/0x519b70055af55a007110b4ff99b0ea33071c720a/proposal/0xf3ace9e04caccd90316c344ba3bd32408498f1851a3db08bfbcf7b88181d6c47" target="_blank" rel="noopener noreferrer">Proposal #2</a>',
        },
        {
            name: 'dxdao-landing-page',
            github: 'https://github.com/fMercury/dxdao-landing-page',
            ipfs: '',
            version: '0.2.0',
            links: '',
        },
        {
            name: 'dxdao-snapshot',
            github: 'https://github.com/AugustoL/dxdao-snapshot',
            ipfs:
                'https://gateway.pinata.cloud/ipfs/QmU9tEdECx9H4S7YcM7AUKGseRP7WSNeW56d1NcwC7jYMP/src/dxdao-snapshot-0.1.0',
            version: '0.1.0',
            links:
                '<a href="https://daotalk.org/t/dxdao-snapshot-a-tool-for-monitoring/1429" target="_blank" rel="noopener noreferrer">DAOTalk Topic</a>',
        },
        {
            name: 'dxswap-core',
            github: 'https://github.com/levelkdev/dxswap-core',
            ipfs: '',
            version: '0.1.0',
            links:
                '<a href="https://daotalk.org/t/uniswap-v2-s-path-to-sustainability-and-the-dxdao-forking-uniswap-v2/1317" target="_blank" rel="noopener noreferrer">DAOTalk Topic</a>',
        },
        {
            name: 'dxswap-periphery',
            github: 'https://github.com/levelkdev/dxswap-periphery',
            ipfs: '',
            version: '0.1.0',
            links: '',
        },
        {
            name: 'dxswap-dapp',
            github: 'https://github.com/levelkdev/dxswap-dapp',
            ipfs: '',
            version: '0.1.0',
            links: '',
        },
        {
            name: 'mesa-dapp',
            github: 'https://github.com/dOrgTech/dex-react',
            ipfs:
                'https://gateway.ipfs.io/ipfs/QmNMBB7Nuc7NDxxRYrh3cU2dSMBddnvn1WvKujUpudzFqY',
            version: '1.0.0',
            links:
                '<a href="https://mesa.eth.link" target="_blank" rel="noopener noreferrer">Mesa Dapp</a>',
        },
        {
            name: 'omen-dapp',
            github: 'https://github.com/protofire/gnosis-conditional-exchange',
            ipfs:
                'https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV',
            version: '0.1.0',
            links:
                '<a href="https://omen.eth.link" target="_blank" rel="noopener noreferrer">Omen Dapp</a>',
        },
        {
            name: 'rails',
            github: 'https://github.com/luzzif/rails',
            ipfs:
                'https://gateway.ipfs.io/ipfs/QmcDqAS2HTRamb5LjHJEFMMpTtCA3gxsAds6vKjfaWoiXa',
            version: '1.0.2',
            links:
                '<a href="https://rails.eth.link" target="_blank" rel="noopener noreferrer">Rails Dapp</a>',
        },
    ],
    community: [
        {
            name: 'voting-dapp-daostack',
            github:
                'https://github.com/AugustoL/voting-dapp-daostack/tree/2d0c7e23f893fe733592c1401a801ec8007f3567',
            ipfs:
                'https://gateway.pinata.cloud/ipfs/QmU9tEdECx9H4S7YcM7AUKGseRP7WSNeW56d1NcwC7jYMP/src/voting-dapp-daostack-2d0c7e23f893fe733592c1401a801ec8007f3567',
            version: '0.10.8',
            links:
                '<a href="https://daotalk.org/t/presenting-voting-dapp-4-daostack-daos/1345" target="_blank" rel="noopener noreferrer">DAOTalk Topic</a> <a href="http://vote.dxtest.eth.link/" target="_blank" rel="noopener noreferrer">vote.dxtest.eth.link</a>',
        },
        {
            name: 'arc-react',
            github: 'https://github.com/dOrgTech/arc.react',
            ipfs: '',
            version: '0.0.1-alpha.2',
            links: '',
        },
    ],
};

const CodebasePage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="Codebase">
            <MetaTags>
                <meta
                    id="meta-description"
                    name="dxdao.eth"
                    content="DXdao Official Projects"
                />
                <meta
                    id="og-title"
                    property="og:title"
                    content="DXdao Codebase"
                />
                <meta name="keywords" content="DXdao, Codebase" />
            </MetaTags>
            <Headline>DXdao Codebase</Headline>
            <Subheadline>DXdao Official Projects</Subheadline>
            <CodebaseSection>
                <ProjectsTable>
                    <ProjectsHeading>
                        <ProjectName>Project Name</ProjectName>
                        <ProjectRepo>
                            Repository{' '}
                            <ProjectRepoMobileHidden>
                                / Source Code (IPFS)
                            </ProjectRepoMobileHidden>
                        </ProjectRepo>
                        <ProjectVersion>Version</ProjectVersion>
                        <ProjectLinks>Related Links</ProjectLinks>
                    </ProjectsHeading>
                    {projects.official.map((item, index) => (
                        <ProjectItem key={index}>
                            <ProjectName>{item.name}</ProjectName>
                            <ProjectRepo>
                                {item.github === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="Github.svg"></Icon>
                                    </a>
                                )}
                                {item.ipfs === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.ipfs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="IPFS.svg"></Icon>
                                    </a>
                                )}
                            </ProjectRepo>
                            <ProjectVersion>{item.version}</ProjectVersion>
                            <ProjectLinks>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.links,
                                    }}
                                ></span>
                            </ProjectLinks>
                        </ProjectItem>
                    ))}
                </ProjectsTable>
                <Subheadline>DXdao Community Projects</Subheadline>
                <ProjectsTable>
                    <ProjectsHeading>
                        <ProjectName>Project Name</ProjectName>
                        <ProjectRepo>
                            Repository{' '}
                            <ProjectRepoMobileHidden>
                                / Source Code (IPFS)
                            </ProjectRepoMobileHidden>
                        </ProjectRepo>
                        <ProjectVersion>Version</ProjectVersion>
                        <ProjectLinks>Related Links</ProjectLinks>
                    </ProjectsHeading>
                    {projects.community.map((item, index) => (
                        <ProjectItem key={index}>
                            <ProjectName>{item.name}</ProjectName>
                            <ProjectRepo>
                                {item.github === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="Github.svg"></Icon>
                                    </a>
                                )}
                                {item.ipfs === '' ? (
                                    ''
                                ) : (
                                    <a
                                        href={item.ipfs}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon src="IPFS.svg"></Icon>
                                    </a>
                                )}
                            </ProjectRepo>
                            <ProjectVersion>{item.version}</ProjectVersion>
                            <ProjectLinks>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.links,
                                    }}
                                ></span>
                            </ProjectLinks>
                        </ProjectItem>
                    ))}
                </ProjectsTable>
            </CodebaseSection>
        </section>
    );
};
export default CodebasePage;
