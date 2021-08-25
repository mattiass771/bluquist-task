import React from 'react'
import containers from '../styles/containers.module.css'
import texts from '../styles/texts.module.css'
import headings from '../styles/headings.module.css'
import { ReusableButton } from './ReusableButton/ReusableButton'

export const Main = () => {
    return (
        <main className={`${containers.centered} ${texts.centered}`}>
            <section>
                <header>
                    <p className={`${headings.medium}`}>Button variants</p>
                </header>
                <article>
                    <p>
                        <ReusableButton
                            text={'Default button'}
                        />
                        <ReusableButton
                            text={'Outlined button'}
                            fill={'outline'}
                        />
                    </p>
                    <p>
                        <ReusableButton
                            text={'Red small button'}
                            color={'red'}
                            size={'small'}
                        />
                        <ReusableButton
                            text={'Outlined red small button'}
                            fill={'outline'}
                            color={'red'}
                            size={'small'}
                        /> 
                    </p>
                    <p>
                        <ReusableButton
                            text={'Gray large button'}
                            color={'gray'}
                            size={'large'}
                        />
                        <ReusableButton
                            text={'Outlined gray large button'}
                            fill={'outline'}
                            color={'gray'}
                            size={'large'}
                        /> 
                    </p>
                    <p>
                        <ReusableButton
                            color={'gray'}
                            variant={'toggle'}
                        />
                        <ReusableButton
                            size={'small'}
                            color={'blue'}
                            variant={'toggle'}
                        />
                    </p>
                </article>
            </section>
        </main>
    )
}