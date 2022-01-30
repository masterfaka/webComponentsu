import React, { Component } from 'react';
import './Main.css';

import Navbar from './../../components/Navbar/Navbar';
import BlogCardContainer from './../../components/BlogCardContainer/BlogCardContainer';

import './../../web-components/BlogModal/blog-modal';//very important to be imported at top level

class Main extends Component {
    state = {
        newBlog: {},
        blogs: [
            {
                id: 0,
                title: "Study in Scarlet",
                author: "Dr. John Watson",
                cover_photo: "https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg",
                synopsis: "The story begins in 1881, when I, having returned to London after serving in the Second Anglo-Afghan War, visit the Criterion Restaurant and run into an old friend named Stamford, who had been a dresser under him at St. Bartholomew's Hospital. I confide in Stamford that, due to a shoulder injury that I sustained at the Battle of Maiwand, I have been forced to leave the armed services and now looking for a place to live-before my six-month half-pay pension runs out."
            },
            {
                id: 1,
                title: "The Hound of the Baskervilles",
                author: "Dr. John Watson",
                cover_photo: "https://www.storynory.com/wp-content/uploads/2016/01/ximage-600x450.jpeg.pagespeed.ic.iUc8g2Vfmw.jpg",
                synopsis: "Dr James Mortimer asks Sherlock for advice after his friend Sir Charles Baskerville was found dead in the park surrounding his manor, in the moors of Devon. The death was attributed to a heart attack, but according to Mortimer, Sir Charles's face retained an expression of horror, and not far from the corpse the footprints of a gigantic hound were clearly visible."
            },
            {
                id: 2,
                title: "The Red-Headed League",
                author: "Dr. John Watson",
                cover_photo: "http://1.bp.blogspot.com/-VQWNOT0AAUE/UUVO4SJB9OI/AAAAAAAACV8/O1dvCg002aM/s1600/sherlock-holmes-red-headed-league.jpg",
                synopsis: "Jabez Wilson, a London pawnbroker, comes to consult Sherlock Holmes and I. While studying this perspective client, both of us noticed his red hair, which had a distinct flame-like hue. Wilson tells us that some weeks before, his young assistant, Vincent Spaulding, urged him to respond to a newspaper want-ad offering highly-paid work to only red-headed male applicants."
            },
            // {
            //     id: 3,
            //     title: "The Final Problem",
            //     author: "Dr. John Watson",
            //     cover_photo: "http://learnenglishbylistening.com/wp-content/uplo`ads/2019/08/The-Final-Problem-thumb.jpg",
            //     synopsis: "Holmes arrives at my residence one evening in a somewhat agitated state and with grazed and bleeding knuckles. Much to my surprise, he had apparently escaped three separate murder attempts that day after a visit from Professor Moriarty, who warned Holmes to withdraw from his pursuit of justice against him to avoid any regrettable outcome. First, just as he was turning a street corner, a cab suddenly rushed towards him and Holmes just managed to leap out of the way in time."
            // },
            {
                id: 4,
                title: "The Five Orange Pips",
                author: "Dr. John Watson",
                cover_photo: "http://learnenglishbylistening.com/wp-content/uploads/2019/08/The-Five-Orange-Pips-thumb.jpg",
                synopsis: "A young gentleman named John Openshaw has a strange story: in 1869 his uncle Elias Openshaw had suddenly come back to England to settle on an estate in Horsham, West Sussex after living for years in the United States as a planter in Florida and serving as a colonel in the Confederate Army."
            }
        ]
    }

    render() {
        return (
            <div className="Main">
                <Navbar title="My Adventures with Sherlock Holmes - Dr. John H. Watson"></Navbar>
                <BlogCardContainer newBlog={this.state.newBlog} blogs={this.state.blogs} />
            </div>
        )
    }
}

export default Main;