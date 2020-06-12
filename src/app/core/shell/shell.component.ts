import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeQuery } from '../theme/theme.query';
import { ThemeService } from '../theme/theme.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'qf-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  currentTheme: string;
  currentThemeSub: Subscription;
  isHandset$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private themeQuery: ThemeQuery,
    public afAuth: AngularFireAuth
  ) {
    this.currentThemeSub = this.themeQuery.currentTheme$.subscribe(
      (theme) => (this.currentTheme = theme)
    );
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }

  changeTheme() {
    this.currentTheme =
      this.currentTheme === 'light-qf-theme'
        ? 'dark-qf-theme'
        : 'light-qf-theme';
    this.themeService.setTheme(this.currentTheme);
  }
}
