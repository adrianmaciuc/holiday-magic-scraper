import { SELECTORS as s } from "./selectors"

/*
Preconditions:
Use your gmail account to send emails. First enable 2 step verification https://myaccount.google.com/security
Then go to https://myaccount.google.com/apppasswords and choose SELECT APP -> Other (custom name) -> give it a random name (eg: nodemailer)
This will generate a password for you that you can use for nodemailer to login programmatic to your account to send emails.
Put that password in your secrets/env file under MAIL_PASS = 'secretCodeNoSpaceNeeded'
*/

// replace below with options of your choice 

const destination = 'Kalimera Kriti'
const transportType = 'Avion'
const departureFrom = 'Cluj-Napoca'
const nrOfNights = '7'
const dateOfDeparture = '21.09.2023'
const nrOfRooms = '1'
const nrOfAdults = '2'
const nrOfKids = '2'
const ageFirstKid = '3'
const ageSecondKid = '7'
const sendResultsTo = 'adrian.maciuc@gmail.com'
const emailUsedToSend = 'bugghunter69@gmail.com'
let finalPrice 

// -------------------------------------------

describe('Get holiday', () => {
  it('Get it boy!', () => {
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

    // use these lines below only if you want options with kids as well
    cy.get(s.NR_OF_KIDS).click()
    cy.get(s.DROPDOWN_OPTION).contains(nrOfKids).click()
    cy.get(s.KID_AGE).first().click()
    cy.get(s.DROPDOWN_OPTION).contains(ageFirstKid).click()
    cy.get(s.KID_AGE).last().click()
    cy.get(s.DROPDOWN_OPTION).contains(ageSecondKid).click()
    // above 6 lines are optional, you can comment them out if you don't need for kids as well

    cy.get(s.SEARCH_BTN).click()
    cy.contains(s.RESULT_TITLE, destination.toUpperCase(), {timeout: 30000}).should('be.visible')
    cy.get(s.PRICE).then(function(price) {
      debugger
      finalPrice = price[0].innerText.split('\n')[1]
    }).then(function(){
      cy.task('sendEmail', {
          destination,
          departureFrom,
          dateOfDeparture,
          nrOfRooms,
          nrOfAdults,
          emailUsedToSend,
          sendResultsTo,
          finalPrice 
      })
    })
  })
})