import axios from 'axios'
import { GitBranch, Search, Star } from 'lucide-react'
import { useState } from 'react'
import * as S from './styles'

interface IUsers {
    avatar_url: string
    bio: string
    blog: string
    company: null
    created_at: string
    email:null
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable: null
    html_url: string
    id: number
    location: null
    login: string
    name: string
    node_id: string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    twitter_username: null
    type: string
    updated_at: string
    url: string
}

interface IRepos {
    name: string
    description: string
    stargazers_count: number
    forks_count: number

}

export function Home() {
    const [userName, setUserName] = useState<string>('')
    const [searchData, setSearchData] = useState<IUsers>()
    const [searchRepos, setSearchRepos] = useState<IRepos>()



   async function handleGetUsers() {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${userName}`)

            setSearchData(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleGetRepositories() {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${userName}/repos`)
            setSearchRepos(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <S.Content>
                <S.Header>
                    <h1>Desafio Synter</h1>
                </S.Header>
                
                <S.Container>
                    <div className='actions'>
                        <input type='text' onChange={(e) => setUserName(e.target.value)} placeholder='Digite o usuário do gitHub' />
                        <button onClick={() => {
                            handleGetUsers(),
                                handleGetRepositories()

                        }}>
                            <Search color='#ffffff' />
                        </button>
                  </div>
                </S.Container>

                {searchData ? (
                    <>
                        <S.ResultsSearch>
                            <img src={searchData?.avatar_url} alt="" />
                            <div>
                                <h2>{searchData?.name}</h2>
                                {searchData.location ? <p>{searchData.location}</p> : <p>Localização não encontrada</p>}
                            </div>
                        </S.ResultsSearch>
                    </>
                ) : (<p>Aparentemente ainda não foi realizado nenhuma pesquisa.</p>)}
                <S.CardsRepos >
                    {searchRepos &&
                        searchRepos.map(({ name, description, stargazers_count, forks_count }) => (
                            <>
                                <S.Card>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <div className='icons'>
                                        <div>
                                            <Star color='yellow' />
                                            {stargazers_count}
                                        </div>

                                        <div>
                                             <GitBranch width={18} />
                                             {forks_count}
                                        </div>
                                       

                                    </div>
                                </S.Card>
                            </>
                        )
                        )}
              </S.CardsRepos>
                
        </S.Content>
        </>
    )
}