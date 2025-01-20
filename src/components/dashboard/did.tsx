'use client'
import { useDIDInfo } from "../../context/DIDContext";
import CreateDid from './createDID';
import CreatedDid from './createdDID';

const Did = () => {
    const { didInfo } = useDIDInfo();

    return <div>
        {
            didInfo.did == "" ? <CreateDid /> : <CreatedDid />
        }
    </div>
}

export default Did