import { SELECTORS as s } from "../support/selectors"

// replace here with options of your choice

const destination = 'Kalimera Kriti'
const transportType = 'Avion'
const departureFrom = 'Cluj-Napoca'
const nrOfNights = '7'
const dateOfDeparture = '06.09.2023'
const nrOfRooms = '1'

// -------------------------------------------

describe('Get holiday', () => {
  it('Get', () => {
    cy.visit('/')
    cy.get(s.DESTINATION).first().type(destination)
    cy.get(s.DESTINATION_DROPDOWN_ITEM).contains(destination).click()
    cy.get(s.TRANSPORT_TYPE).click()
    cy.get(s.DROPDOWN_OPTION).contains(transportType).click()
    cy.get(s.DEPARTURE_FROM).click()
    cy.get(s.DROPDOWN_OPTION).contains(departureFrom).click()
    cy.get(s.NR_OF_NIGHTS).click()
    cy.get(s.DROPDOWN_OPTION).contains(nrOfNights).click()
    cy.get(s.DATE_OF_DEPARTURE).click()
    cy.get(s.DROPDOWN_OPTION).contains(dateOfDeparture).click()
    cy.get(s.NR_OF_ROOMS).click()
    cy.get(s.DROPDOWN_OPTION).contains(nrOfRooms).click()
    cy.get(s.NR_OF_ADULTS).last().click()
  })
})