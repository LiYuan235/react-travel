import React from "react";
import {RouteComponentProps} from 'react-router-dom';
interface MatchParams{
   tourisRouteId:string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>>=(props)=>{
    return <h1>路线旅游详情页面,路线id:{props.match.params.tourisRouteId}</h1>
}