import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  members$: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(private MemberService: MemberService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.MemberService.searchMembers(term))
    );
  }


}
