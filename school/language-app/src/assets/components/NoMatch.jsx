import { useLocation } from 'react-router-dom';

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3 style={{ fontWeight: 'bold', marginTop: '15vh' }}>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NoMatch;