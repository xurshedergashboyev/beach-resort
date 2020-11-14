import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default class Error extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner title="404" subtitle="page not found">
                        <Link to='/' className="btn-primary">
                            return home
                        </Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}
