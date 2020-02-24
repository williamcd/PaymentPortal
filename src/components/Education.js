import React, { Component } from 'react';
import styled from 'styled-components';

class Education extends Component {
    render() {
        return (
            <Main>
                <div>
                    Education
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi in rutrum venenatis, elit lorem pulvinar metus, et eleifend eros mauris nec nisi. Praesent ornare dolor ac lacus cursus varius. Sed rhoncus id justo vitae ornare. Sed dignissim maximus dui, lacinia eleifend metus sollicitudin vel. Donec sed dui eget dui dapibus pharetra ut vitae tellus. Etiam ut nisl lacus. Suspendisse elit diam, lobortis vel euismod non, ornare a magna.
    
    Etiam blandit ornare felis. Fusce sagittis, risus vitae auctor tempus, lectus velit feugiat odio, vel facilisis mi augue et nulla. Nulla vitae placerat nisl, eu maximus augue. Aliquam faucibus tellus quis lorem lobortis, vel molestie libero hendrerit. Aenean enim elit, varius a luctus in, facilisis eu ligula. Phasellus nec cursus purus. Fusce fermentum est sit amet vulputate efficitur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi in rutrum venenatis, elit lorem pulvinar metus, et eleifend eros mauris nec nisi. Praesent ornare dolor ac lacus cursus varius. Sed rhoncus id justo vitae ornare. Sed dignissim maximus dui, lacinia eleifend metus sollicitudin vel. Donec sed dui eget dui dapibus pharetra ut vitae tellus. Etiam ut nisl lacus. Suspendisse elit diam, lobortis vel euismod non, ornare a magna.
    
    Etiam blandit ornare felis. Fusce sagittis, risus vitae auctor tempus, lectus velit feugiat odio, vel facilisis mi augue et nulla. Nulla vitae placerat nisl, eu maximus augue. Aliquam faucibus tellus quis lorem lobortis, vel molestie libero hendrerit. Aenean enim elit, varius a luctus in, facilisis eu ligula. Phasellus nec cursus purus. Fusce fermentum est sit amet vulputate efficitur.
                </p>
                <div>Payment Methods</div>
                <Images>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                </Images>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi in rutrum venenatis, elit lorem pulvinar metus, et eleifend eros mauris nec nisi. Praesent ornare dolor ac lacus cursus varius. Sed rhoncus id justo vitae ornare. Sed dignissim maximus dui, lacinia eleifend metus sollicitudin vel. Donec sed dui eget dui dapibus pharetra ut vitae tellus. Etiam ut nisl lacus. Suspendisse elit diam, lobortis vel euismod non, ornare a magna.

Etiam blandit ornare felis. Fusce sagittis, risus vitae auctor tempus, lectus velit feugiat odio, vel facilisis mi augue et nulla. Nulla vitae placerat nisl, eu maximus augue. Aliquam faucibus tellus quis lorem lobortis, vel molestie libero hendrerit. Aenean enim elit, varius a luctus in, facilisis eu ligula. Phasellus nec cursus purus. Fusce fermentum est sit amet vulputate efficitur.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi in rutrum venenatis, elit lorem pulvinar metus, et eleifend eros mauris nec nisi. Praesent ornare dolor ac lacus cursus varius. Sed rhoncus id justo vitae ornare. Sed dignissim maximus dui, lacinia eleifend metus sollicitudin vel. Donec sed dui eget dui dapibus pharetra ut vitae tellus. Etiam ut nisl lacus. Suspendisse elit diam, lobortis vel euismod non, ornare a magna.

Etiam blandit ornare felis. Fusce sagittis, risus vitae auctor tempus, lectus velit feugiat odio, vel facilisis mi augue et nulla. Nulla vitae placerat nisl, eu maximus augue. Aliquam faucibus tellus quis lorem lobortis, vel molestie libero hendrerit. Aenean enim elit, varius a luctus in, facilisis eu ligula. Phasellus nec cursus purus. Fusce fermentum est sit amet vulputate efficitur.
                </p>
            </Main>
        );
    }
}

const Main = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-content: flex-start;
    overflow: scroll;

    background: yellow;
    margin-left: 25px;
    margin-right: 25px;
    div {
        font-size: 30px;
        font-weight: 700;
        align-self: center;
    }
    p {
        font-size: 20px;
    }
`
const Images = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Image = styled.img`
    width: 270px;
    height: 300px;
    background-color: red;
`

export default Education;