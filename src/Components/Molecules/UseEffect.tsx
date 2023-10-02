import { useEffect, useState } from 'react';
import s from './useEffect.module.css'
import axios from 'axios';

type SearchUserType = {
    login: string;
    id: number;
    avatar_url: string;
    followers_url: string;
};

type SearchResult = {
    items: SearchUserType[];
};

// 
type follwoType = {
    avatar_url: string | undefined;
    login: string;
};

type follwoResult = {
    items: follwoType[];
};

export const UseEffect = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

    const [Users, setUsers] = useState<SearchUserType[]>([]);
    const [FollowersUser, setFollowersUser] = useState<follwoType[]>([]);

    const [tempSerch, setTempSerch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [imgUser, setimgUser] = useState('');
    const [loginUser, setloginUser] = useState('');

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(response => { setUsers(response.data.items) })
    }, [searchTerm])

    useEffect(() => {
        axios.get<Array<follwoType>>(`https://api.github.com/users/${loginUser}/followers`)
            .then(response => { setFollowersUser(response.data) })
    }, [loginUser])

    console.log(FollowersUser);

    return (
        <div className={s.useEffect}>
            <div>
                <div>
                    <input
                        placeholder='search'
                        value={tempSerch}
                        onChange={(e) => { setTempSerch(e.currentTarget.value) }}
                    /> <button onClick={() => {
                        setSearchTerm(tempSerch)
                    }}>find</button>
                </div>
                <ul>
                    {Users.map(u => <li key={u.id} className={selectedUser === u ? s.selected : ''} onClick={() => {
                        setSelectedUser(u);
                        setloginUser(u.login);
                        setimgUser(u.avatar_url);
                    }}>{u.login}</li>)}
                </ul>
            </div>
            <div>
                <h1>{FollowersUser.length}</h1>
                {FollowersUser.map(follower => (
                    <div>
                    </div>
                ))}
                <img src={imgUser} />
            </div>
        </div>
    );

}

