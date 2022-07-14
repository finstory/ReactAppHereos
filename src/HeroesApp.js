import React from "react";
import { AuthPorvider } from './auth';
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {
    return (
    <AuthPorvider>
        <div className="container">
      
                <AppRouter />
            
        </div>
         </AuthPorvider>

    )
}