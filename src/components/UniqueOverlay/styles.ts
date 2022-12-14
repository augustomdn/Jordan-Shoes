import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BurgerSVG, LogoSVG } from './IconSVG'

export const Container = styled.div`
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 10px;
    min-height: 52px;
`
export const Logo = styled(LogoSVG)`
    height: 40px;
    cursor: pointer;
`
export const Burger = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    cursor: pointer;

    padding-right: 5px;
`
export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 20px;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    li {
        list-style-type: none;
        font-size: 14px;

        & + li {
            margin-top: 10px 0 0;
        }

        a {
            text-decoration: none;
            color: #393c41;

            &:hover {
                color: #000000;
            }
        }
    }

    @media (min-width: 600px) {
        margin-bottom: 38px;

        ul {
            flex-direction: row;

            li + li {
                margin: 0 0 0 30px;
            }
        }
    }

`
