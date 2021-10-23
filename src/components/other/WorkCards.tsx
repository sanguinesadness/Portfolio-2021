import React, { FC } from 'react';
import { IWork } from '../../types/work';
import WorkCard from './WorkCard';

interface IWorkCardsProps {
    works: IWork[];
}

const WorkCards: FC<IWorkCardsProps> = ({ works }) => {
    return (
        <div className="work-cards">
            {
                works.map(work => 
                    <WorkCard key={work.id} work={work}/>
                )
            }
        </div>
    )
}

export default WorkCards;
