import React, { Component } from 'react';
import styled from 'styled-components';

class Education extends Component {
    // THIS IS DISGUSTING, JUST GETTING IT DONE LOL
    state = {
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
    }
    toggleQuestion = (num) => {
        if (num == 1) {
            this.setState({ question1: true })
            this.setState({ question2: false })
            this.setState({ question3: false })
            this.setState({ question4: false })
            this.setState({ question5: false })
            console.log(1)
        } else if (num == 2) {
            this.setState({ question1: false })
            this.setState({ question2: true })
            this.setState({ question3: false })
            this.setState({ question4: false })
            this.setState({ question5: false })
            console.log(2)
        } else if (num == 3) {
            this.setState({ question1: false })
            this.setState({ question2: false })
            this.setState({ question3: true })
            this.setState({ question4: false })
            this.setState({ question5: false })
            console.log(3)
        } else if (num == 4) {
            this.setState({ question1: false })
            this.setState({ question2: false })
            this.setState({ question3: false })
            this.setState({ question4: true })
            this.setState({ question5: false })
            console.log(4)
        } else if (num == 5) {
            this.setState({ question1: false })
            this.setState({ question2: false })
            this.setState({ question3: false })
            this.setState({ question4: false })
            this.setState({ question5: true })
            console.log(5)
        }
    }
    render() {
        return (
            <Main>
                <h1>
                    Education
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi in rutrum venenatis, elit lorem pulvinar metus, et eleifend eros mauris nec nisi. Praesent ornare dolor ac lacus cursus varius. Sed rhoncus id justo vitae ornare. Sed dignissim maximus dui, lacinia eleifend metus sollicitudin vel. Donec sed dui eget dui dapibus pharetra ut vitae tellus. Etiam ut nisl lacus. Suspendisse elit diam, lobortis vel euismod non, ornare a magna.

    Etiam blandit ornare felis. Fusce sagittis, risus vitae auctor tempus, lectus velit feugiat odio, vel facilisis mi augue et nulla. Nulla vitae placerat nisl, eu maximus augue. Aliquam faucibus tellus quis lorem lobortis, vel molestie libero hendrerit. Aenean enim elit, varius a luctus in, facilisis eu ligula. Phasellus nec cursus purus. Fusce fermentum est sit amet vulputate efficitur.
                </p>
                <ImageTitles>
                    <div>Title One</div>
                    <div>Title Two</div>
                    <div>Title Three</div>
                </ImageTitles>
                <Images>
                    <Image alt="img1 goes here"></Image>
                    <Image alt="img2 goes here"></Image>
                    <Image alt="img3 goes here"></Image>
                </Images>
                <DropDowns>
                    <DropDown onClick={() => { this.toggleQuestion(1) }}>
                        {this.state.question1 ? <div className="open">Here's the answer to question 1 the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogit's a big paragraph the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</div> : <div>Here's the question (click me)</div>}
                    </DropDown>
                    <DropDown onClick={() => { this.toggleQuestion(2) }}>
                        {this.state.question2 ? <div className="open">Here's the answer to question 2 the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogit's a big paragraph the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</div> : <div>Here's the question (click me)</div>}
                    </DropDown>
                    <DropDown onClick={() => { this.toggleQuestion(3) }}>
                        {this.state.question3 ? <div className="open">Here's the answer to question 3 the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogit's a big paragraph the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</div> : <div className="closed">Here's the question (click me)</div>}
                    </DropDown>
                    <DropDown onClick={() => { this.toggleQuestion(4) }}>
                        {this.state.question4 ? <div className="open">Here's the answer to question 4 the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogit's a big paragraph the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</div> : <div>Here's the question (click me)</div>}
                    </DropDown>
                    <DropDown onClick={() => { this.toggleQuestion(5) }}>
                        {this.state.question5 ? <div className="open">Here's the answer to question 5 the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogit's a big paragraph the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</div> : <div>Here's the question (click me)</div>}
                    </DropDown>
                </DropDowns>
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
    h1 {
        font-size: 50px;
        font-weight: 700;
        align-self: center;
    }
    p {
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
    }
`
const Images = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Image = styled.img`
    width: 370px;
    height: 460px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 30px;
`
const ImageTitles = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 270px;
        height: 40px;
        font-size: 28px;
        font-weight: 550;
    }
`
const DropDowns = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    transition: transform 1s;
    padding-bottom: 10px;
`
const DropDown = styled.div`
    width: calc(90vw - 200px);
    min-height: 40px;
    margin-top: 10px;
    font-size: 26px;
    font-weight: 500;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    border: 1px solid black;
    outline: none;
    background-color: rgba(37, 14, 57, 0.9);
    color: white;
    border-radius: 5px;
    .open {
        height: 300px;
    }
`

export default Education;