class Toddleramenity{

    //select Amenities Menu
    constructor() {
        cy.get('#bzng-header > a',{ timeout: 20000 }).click({ force: true });
        cy.get('#bzng-nav > div.scrollWrap > a:nth-child(9) > span.ico-amenities').click();
        cy.get('body > section > section > section > amenity-list > div.page-content > ul > li:nth-child(2) > a > section > div.card-details').click();
      }

     
     _requestBooking(){
        
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > div > div > div.input-row.schedule > div > div > button.date-field.ng-scope > span.ng-binding').click();
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > div > div > div.booking-widget > button')
          .should('be.visible')
          .then((element)=>{ element.click()
      
      })

     }

     _pickDateAndtime(){
        cy.get ('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > form > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > select').select('number:1') ; 
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > form > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div > select').select('number:30') ;
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > form > footer > button').click() 
     }

     _submitRequest(){
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > form > fieldset:nth-child(2) > div:nth-child(2) > div > div.bz-autoexpanding > textarea').type("hey there");//enter message
        cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > form > footer > button').click(); //submit

     }

     //confirms the booking card details and booking number
     verifyBookingrequest(){
      cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > div > div > div.booking-widget > div.todays-bookings.ng-scope > div > div > booking-details > a > div.card-info > div.card-details > div.ng-binding',{ timeout: 25000 }).invoke('text')            // check the innerHTML text
      .should('match', /A*/); //Verifies the ticket number against the regex

      cy.get('body > section > section > div > section > section.ui-block.amenity-booking.ng-scope > div > div').screenshot(); //takes a screenshot of the card details
    
     }

     bookAmmenity(){
        this._requestBooking();
        this._pickDateAndtime();
        this._submitRequest();
        this.verifyBookingrequest()


     }


}

module.exports = Toddleramenity

