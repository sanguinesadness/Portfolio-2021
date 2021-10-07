import React from 'react';
import BackToPageButton from '../UI/BackToPageButton';
import MyWorksCaption from '../MyWorksCaption';
import Projects from '../Projects';

const MyWorksPage = () => {
    return (
        <div id="my-works-page">
            <BackToPageButton/>
            <MyWorksCaption/>
            <Projects/>
        </div>
    )
}

export default MyWorksPage;
