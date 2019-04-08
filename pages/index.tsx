import * as React from 'react';
import Link from 'next/link';

interface InitialProps {
    query: string;
}

export default class Index extends React.Component<InitialProps> {
    public render() {
        return <div>
            <div>
                Click
                <Link href='/api/ping'>
                    <a>here</a>
                </Link>
                to read more
            </div>
            TEST
        </div>;
    }
}
