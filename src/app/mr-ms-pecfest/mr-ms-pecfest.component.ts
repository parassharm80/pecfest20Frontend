import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mr-ms-pecfest',
  templateUrl: './mr-ms-pecfest.component.html',
  styleUrls: ['./mr-ms-pecfest.component.css']
})
export class MrMsPecfestComponent implements OnInit {
  // eventDetails=null;
  public  eventDetails ={
    event_name: "Mr. and Ms. PECFEST",
    event_start_date_and_time: "15/03/2021",
    event_end_date_and_time: "21/03/2021",
    venue: "Online",
    // prize_money_worth: "hi",
    min_number_of_participants: "1",
    max_number_of_participants: "1",
    rules: "The pictures of the participants will be posted on our FB page.\n" +
      "\n" +
      "Participants need to follow the official page of Pecfest on Instagram and Facebook (or else they would be disqualified).\n" +
      "\n" +
      "1.\tPer Like/React - 1 point will be awarded\n" +
      "2.\tPer Comment- 2 points will be awarded, but for the comment to be valid, it has to include #pecfest. An individual is allowed to comment only once. \n" +
      "(Likes and comments of only those accounts would be considered who follow the official pecfest page.)\n" +
      "3.\tInstagram Post- Only after their post of participation is uploaded on our official Facebook page, PECFEST, is a candidate allowed to put up a post on his/her Instagram and tag our official Instagram handle i.e @pec.pecfest. \n" +
      "8 points would be awarded for the same!\n" +
      "\n" +
      "Participants with the maximum points would then proceed to the 2nd round.\n" +
      "\n" +
      "Note : 1)The picture should be clear.\n" +
      "            2) Only some basic editing allowed in the picture.\n" +
      "            3)Fake likes and comments would get you disqualified.\n" +
      "\n" +
      "Pecfest Instagram page - https://instagram.com/pec.pecfest?igshid=wrg4u0x2tlrt\n" +
      "Pecfest Facebook Page-\n" +
      "https://m.facebook.com/pecfestofficial/",
    event_description: "hi",
    organizer_contact_no: "Harshita: 7087532312\n" +
      "Ayan: 9878740890",
    event_count: "INDIVIDUAL"
  };
  // eve
  // eventDetails.name="hi";
  ngOnInit(): void {
  }
}
