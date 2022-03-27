import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member;

  constructor(
    private memberService: MemberService
  )
    { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void{
    this.memberService.getMembers()
    .subscribe(members => this.members = members);
  }

}
