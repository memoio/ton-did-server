'use client'
import { useDIDInfo } from "../../context/DIDContext";
import CreateDid from './createDID';
import CreatedDid from './createdDID';

const Did = () => {
    const { didInfo } = useDIDInfo();

    return <div>
        {
            didInfo.number == "000000" ? <CreateDid /> : <CreatedDid />
        }
    </div>
}

export default Did