import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mr-ms-pecfest',
  templateUrl: './mr-ms-pecfest.component.html',
  styleUrls: ['./mr-ms-pecfest.component.css']
})
export class MrMsPecfestComponent implements OnInit {
  public  eventDetails ={
    event_name: "Mr. and Ms. PECFEST",
    event_start_date_and_time: "15/03/2021",
    event_end_date_and_time: "21/03/2021",
    venue: "Online",
    prize_money_worth: "<ul><li>1st - 2500</li> <li> 2nd - 2500</li></ul>",
    min_number_of_participants: "1",
    max_number_of_participants: "1",
    event_banner_image_url: "NA",
    rules: "The pictures of the participants will be posted on our FB page.<br>\n" +
      "\n" +
      "Participants need to follow the official page of Pecfest on Instagram and Facebook (or else they would be disqualified).<br>\n" +
      "\n" +
      "1.\tPer Like/React - 1 point will be awarded<br>\n" +
      "2.\tPer Comment- 2 points will be awarded, but for the comment to be valid, it has to include #pecfest. An individual is allowed to comment only once.<br> \n" +
      "(Likes and comments of only those accounts would be considered who follow the official pecfest page.)<br>\n" +
      "3.\tInstagram Post- Only after their post of participation is uploaded on our official Facebook page, PECFEST, is a candidate allowed to put up a post on his/her Instagram and tag our official Instagram handle i.e @pec.pecfest. \n" +
      "8 points would be awarded for the same!\n" +
      "\n" +
      "<br>Participants with the maximum points would then proceed to the 2nd round.<br>\n" +
      "\n" +
      "Note : <br>1)The picture should be clear.<br>\n" +
      "            2)Only some basic editing allowed in the picture.<br>\n" +
      "            3)Fake likes and comments would get you disqualified.<br>\n" +
      "\n" +
      "Pecfest Instagram page - <a href='https://instagram.com/pec.pecfest?igshid=wrg4u0x2tlrt'>Instagram</a>\n" +
      "<br>Pecfest Facebook Page-\n" +
      "<a href='https://m.facebook.com/pecfestofficial/'>Facebook</a>",
    event_description: "Bonjour folks! <br>\n" +
      "\n" +
      "Despite all the challenges, Pecfest 2020-21 is finally back with the most awaited Event of the Year!\n" +
      "\n" +
      "So are you someone who stands out from the crowd because of the style you possess? Someone who can charm the crowd with their fashion? Or someone immensely talented? A people's person or someone who can make the heads turn? <br>\n" +
      "\n" +
      "If you can relate to any of it, then you have a chance to be the face of one of the biggest fests of North India!<br>\n" +
      "\n" +
      "Presenting to you, Mr. and Ms. PECFest 2020-21!<br>\n" +
      "\n" +
      "All you need to do is to fill out the form mentioned below and upload your picture along with a catchy caption for the first round",
    organizer_contact_no: "Harshita: 7087532312<br>\n" +
      "Ayan: 9878740890",
    event_count: "INDIVIDUAL"
  };
  manipulateLink() {
    let arr = this.eventDetails.event_banner_image_url.split('/');
    return `https://drive.google.com/uc?id=${arr[5]}&export=download`;

  }
  ngOnInit(): void {
  }
}
