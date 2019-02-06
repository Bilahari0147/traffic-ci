import { Component, OnInit } from '@angular/core';
import { TrafficLightService, LIGHT_STATES } from './traffic-light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Traffic Signal App';
  trafficLightState: string;

  constructor(private trafficService: TrafficLightService) {
  }

  ngOnInit() {
    this.trafficService.getState().subscribe(state => {
      this.trafficLightState = state;
    });
  }

  /**
   * @author Bilahari
   * The function gets triggered on STOP button click.
   * Disables the auto method and shows the Red Light
   */
  stop() {
    this.trafficService.setState(LIGHT_STATES.STOP);
  }

  /**
   * @author Bilahari
   * The function gets triggered on READY button click.
   * Disables the auto method and shows the Yello Light
   */
  ready() {
    this.trafficService.setState(LIGHT_STATES.READY);
  }

  /**
   * @author Bilahari
   * The function gets triggered on GO button click.
   * Disables the auto method and shows the Green Light
   */
  go() {
    this.trafficService.setState(LIGHT_STATES.GO);
  }

  /**
   * @author Bilahari
   * The function gets triggered on AUTO button click.
   * Resets the signal to auto method which changes the state
   * of the signal using timeouts
   */
  auto() {
    this.trafficService.resetSignalToAuto();
  }

}
