import { useState } from "react";
import './CreateAccount.css';
import axios from "axios";
import { Navigate, useParams } from 'react-router-dom';
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
    console.log(subpage);

    // const FormTitles = ["SignUp Page", "SignUp Page"];
    console.log(page);
    // const PageDisplay = () => {
    //     if (page === 0) {
    //         return (
    //             <CreateAccountPage
    //                 name={name}
    //                 setName={setName}
    //                 userName={userName}
    //                 setUserName={setUserName}
    //                 pass={pass}
    //                 setPass={setPass}
    //                 setPage={setPage}
    //             />
    //         );
    //     } else {
    //         return <Profille2 />;
    //     }
    // };


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
                {/* <div className="tutor-form-heading">
                    <h2>{FormTitles[page]}</h2>
                </div> */}
                {/* <div>
                    {PageDisplay()}
                </div> */}
        </div>
    );
}
