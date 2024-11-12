import { useState } from "react";
import './CreateAccount.css';
import { useParams } from 'react-router-dom';
import CreateAccountPage from "./SignUpPage";
import Profille2 from "../../pages/Profille2";

export default function AccountLayout() {
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    
    let {subpage} = useParams();
    if(subpage === undefined){
       subpage = 'page1';
    }

    return (
        <div className="tutor-form">
             {subpage === 'page1' && (
                <CreateAccountPage 
                    name={name}
                    setName={setName}
                    userName={userName}
                    setUserName={setUserName}
                    pass={pass}
                    setPass={setPass}
                    setPage={setPage}
                />
             )}
             {subpage === 'page2' && (
                <Profille2 name={name} userName={userName} pass={pass}/>
             )}
        </div>
    );
}
