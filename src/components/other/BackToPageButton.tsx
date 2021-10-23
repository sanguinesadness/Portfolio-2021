import { TiArrowBack } from 'react-icons/ti';
import { useHistory } from 'react-router';

const BackToPageButton = () => {
    const history = useHistory();

    return (
        <div className="back-to-page-button__wrapper">
            <button className="back-to-page-button bg-blur" onClick={() => history.goBack()}>
                <TiArrowBack className="icon" />
            </button>
        </div>
    )
}

export default BackToPageButton;
