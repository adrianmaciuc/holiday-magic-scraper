import { SELECTORS as s } from "../support/selectors"

// replace here with options of your choice

const destination = 'Kalimera Kriti'
const transportType = 'Avion'
const departureFrom = 'Cluj-Napoca'
const nrOfNights = '7'
const dateOfDeparture = '07.09.2023'
const nrOfRooms = '1'
const nrOfAdults = '2'
const nrOfKids = '2'
const ageFirstKid = '3'
const ageSecondKid = '7'
let finalPrice 

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
    cy.get(s.DROPDOWN_OPTION).contains(nrOfAdults).click()
    cy.get(s.NR_OF_KIDS).click()
    cy.get(s.DROPDOWN_OPTION).contains(nrOfKids).click()
    cy.get(s.KID_AGE).first().click()
    cy.get(s.DROPDOWN_OPTION).contains(ageFirstKid).click()
    cy.get(s.KID_AGE).last().click()
    cy.get(s.DROPDOWN_OPTION).contains(ageSecondKid).click()
    cy.get(s.SEARCH_BTN).click()
    cy.contains(s.RESULT_TITLE, destination.toUpperCase()).should('be.visible')
    cy.get(s.PRICE).then(function(price) {
      finalPrice = price[0].innerText.replace(/\D/g, '')
    }).then(function(){
      debugger
      cy.task('sendEmail', finalPrice)
    })
  })
})