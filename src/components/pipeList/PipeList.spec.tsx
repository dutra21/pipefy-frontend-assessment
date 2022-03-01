import PipeList from "./PipeList";
import { render } from "@testing-library/react";
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ORGANIZATION } from "../../graphql/organization";
import { ORGANIZATION_ID } from "../../shared/constants/constants";
import Pipe from "../pipe/Pipe";

Enzyme.configure({adapter: new Adapter()});

export const mockPipeList = {
    request: {
        query: ORGANIZATION,
        variables: { id: ORGANIZATION_ID }
    },
    result: {
        data: {
            organization: {
                name: 'Pipefy FrontEnd - Assessment',
                pipes: [
                   { 
                       cards_count: 6,
                        color: "blue",
                        icon: "mac",
                        id: "301735351",
                        name: "IT Service Desk "
                    },  
                    {
                        cards_count: 0,
                        color: "green",
                        icon: "mkt-requests",
                        id: "301735381",
                        name: "Video Class Teachers Payment"
                    }
                ]
            }
        }
    }
}

describe('PipeList Component', () => {
    it('should render list of Pipe', async () => {
        render(<PipeList />)

        const mock = mockPipeList.result.data.organization.pipes;
        const wrapper = shallow(<Pipe pipe={mock}/>);
        expect(wrapper.find('ul').children()).toBe(mock.length);
    })
})