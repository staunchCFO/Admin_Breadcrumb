import styled from 'styled-components'

export const DashHeader = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    background-color: #012169;
    width: 100%;
    border-bottom : 4px solid #0041c2;
    overflow-x: hidden;

    .main-row-header {
        padding-right: 7px;
        padding-left: 7px;
        max-width: 100% !important;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .help_user{
        a{
            color: #FFF;
            margin-left: 20px;
            text-decoration: none;
        }
    }
`

export const HeaderDropDown = styled.div`
    display: ${({toggled}) => toggled ? 'block' : 'none'};
    position: absolute;
    background-color: #012169;
    right: 0;
    left: 0;
    top: 50px;
    z-index: 9999999;
    padding-top: 30px;
    transition: .3s ease-in 3s;
    color: #FFF;
    font-size: .9rem;

    button{
        position: absolute;
        right: 13px;
        top: 0;
        border-radius: 50%;
        font-weight: bold;
        border: none;
    }
    .menu_header {
        color : #98caec;
        padding-left: 20px;
        font-size: 1rem;
    }

    .menu_list {
        list-style-type: none;
        color : #fff;
        padding-left: 20px;

        li{
            padding-bottom: 10px;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
    } 

    .menu_line{
        border-bottom: 1px solid #fff;
        margin: 5px 20px 0 0;
    }

    .no-header-list{
        padding-top: 20px;
    }
`
