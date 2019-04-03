import * as React from 'react';
import Link from 'next/link';

interface InitialProps {
    query: string;
}

export default class Index extends React.Component<InitialProps> {
    public static getInitialProps({ query }: InitialProps) {
        return { query };
    }

    public render() {
        return <div>
            <div>
                Click
                <Link href='/ping'>
                    <a>here</a>
                </Link>
                to read more
            </div>
            TEST
            {this.props.query}
        </div>;
    }
}
