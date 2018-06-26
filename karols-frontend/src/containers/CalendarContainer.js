import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import { fetchDateSelected } from "../api/fetchDateSelected"
import { showFourFirstTimeSlots } from "../display/index"

import { ButtonGroup, Button } from "reactstrap"
import {
  makeTimeslotsReceived,
  makeChooseSlotReservation
} from "../actions/actions"

import ResultCalendar from "../components/ResultCalendar"
const { DateTime } = require("luxon")

const mapStateToProps = state => ({
  timeSlots: state.timeSlots
})

const mapDispatchToProps = dispatch => ({
  onTimeSlotsReceived: response => dispatch(makeTimeslotsReceived(response)),
  onTimeSlotSelected: timeSlot => dispatch(makeChooseSlotReservation(timeSlot))
})

class TimeSlots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualizedTimeSLots: [],
      showMore: false
    }
  }
  handleMinusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const dateMinusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: -1 })
          .toISODate()
        fetchDateSelected(dateMinusOne).then(response => {
          this.props.onTimeSlotsReceived(response)
        })
      }
    })
  }
  handlePlusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const datePlusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: +1 })
          .toISODate()
        fetchDateSelected(datePlusOne).then(response => {
          this.props.onTimeSlotsReceived(response)
        })
      }
    })
  }
  seeMoreTimeSlots = () => {
    console.log(
      this.props.timeSlots.map(day => ({
        ...day,
        timeSlots: day.timeSlots.slice(0, 4)
      }))
    )
    console.log(this.state.actualizedTimeSLots)
  }
  render() {
    return (
      <Container>
        <ButtonGroup size="lg">
          <Button onClick={() => this.handleMinusClick()}>&lt;</Button>
          <Button onClick={() => this.handlePlusClick()}>&gt;</Button>
        </ButtonGroup>
        <ResultCalendar
          weekTimeSlots={showFourFirstTimeSlots(
            this.props.timeSlots,
            this.state.showMore
          )}
          selectTimeSlot={this.props.onTimeSlotSelected}
        />
        <div className="availabilities-more-button mt-3">
          <Button
            onClick={() => this.seeMoreTimeSlots()}
            outline
            color="secondary"
          >
            Voir plus d'horaires
          </Button>
        </div>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
