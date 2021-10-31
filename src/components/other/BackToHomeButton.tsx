import { TiArrowBack } from 'react-icons/ti';
import { useHistory } from 'react-router';
import settings from '../../../package.json';

const appGitName = settings['git-name'];

const BackToHomeButton = () => {
    const history = useHistory();

    return (
        <div className="back-to-home-button__wrapper">
            <button className="back-to-home-button bg-blur" onClick={() => history.push(`/${appGitName}`)}>
                <TiArrowBack className="icon" />
            </button>
        </div>
    )
}

export default BackToHomeButton;
