import React from "react"
import { gql,useQuery } from "@apollo/client"
import { Layout } from "../components"
import { useParams } from "react-router-dom"

const Track = () =>{
    const {trackId} = useParams();
    return <Layout></Layout>
}
export default Track;