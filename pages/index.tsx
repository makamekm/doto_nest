import * as React from 'react';
import Link from 'next/link';

interface InitialProps {
    query: string;
}

export default class Index extends React.Component<InitialProps> {
    public render() {
        console.log(this.props);
        return <div>
            <div>
                Click
                <Link href='/ping'>
                    <a>here</a>
                </Link>
                to read more
            </div>
            TEST
        </div>;
    }
}
