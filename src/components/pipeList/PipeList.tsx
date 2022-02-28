import { useQuery } from "@apollo/client";
import { ORGANIZATION } from "../../graphql/organization"
import { ORGANIZATION_ID } from "../../shared/constants/constants";
import { IPipe } from "../../shared/interfaces/pipe.interface"
import Pipe from "../pipe/Pipe";
import "./pipelist.scss"

function PipeList() {
    const {loading, data, error} = useQuery(ORGANIZATION, {
        variables: { id: ORGANIZATION_ID }
    })

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Ops... something is worng</h1>
    if(data) {
        console.log(data)
    }
    const pipes = data?.organization?.pipes
            .map((pipe: IPipe) => pipe)
            .sort((pipeA: IPipe, pipeB: IPipe) =>
                pipeA.name!.trim().localeCompare(pipeB.name!.trim())
            )

    return (
        <div>
            <ul className="pipe-list">
                {pipes?.map((pipe: IPipe) => (
                    <li className="pipe-list__item">
                        <Pipe  key={pipe.id} pipe={pipe}/> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PipeList;