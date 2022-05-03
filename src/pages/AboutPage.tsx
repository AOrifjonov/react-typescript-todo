import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1>Цтраница информации</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis ipsum delectus doloribus dignissimos, vitae rerum 
                accusamus ex commodi quos deleniti!
            </p>
            <button onClick={()=>navigate('/')} className="btn">Обратно к списку дел</button>
        </React.Fragment>
    );
}