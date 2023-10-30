import Head from 'next/head';
import React, { ReactNode } from 'react'
import Navbar from '../common/Navbar';



interface Props {
    children: ReactNode;
    title?: string;
}

const Layout = ({ children, title }: Props) => {
    return (
        <>

            <Head>
                <title>{title || '+Vida'}</title>
                <meta name='author' content='Benjamín La Valla'></meta>
                <meta name='description' content='App de pedidos de alimentos nutritivos y saludables vegetarianos'></meta>
                <meta name='keywords' content='comida, organica, Ayacucho, alimentos, viandas, vegetal, vida, nutritivo, mas, masvida, cocina, base, plantas'></meta>
            </Head>

            <Navbar />
            <main className='flex align-middle m-16'>
                {children}
            </main>
        </>
    )
}

export default Layout