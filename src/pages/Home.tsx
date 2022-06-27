import * as React from 'react';

function Home(): JSX.Element {
    const [count, setCount] = React.useState(1);
    return (
        <div>
            <h1 onClick={() => setCount(count + 1)}>
                Hello, world!
            </h1>
            <h4>
                this is a test
                123,
            </h4>
        </div>
    );
}

export default Home;
