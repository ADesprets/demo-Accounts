'use strict';

module.exports = function(Account) {

  // add the HAL (Hypertext Application Language) elements
  Account.observe('loaded', function setHALContent(ctx, next) {
    if (ctx.data) {
      // get the current account id
      var id = ctx.data.id;
      // set the HAL _links element
      ctx.data._links = {};
      var links = ctx.data._links;
      // insert balances
      links.balances = {};
      // insert transactions
      links.transactions = {};
      // insert balances.href
      links.balances.href='v1/accounts/' + id + '/balances-report';
      // insert transactions.href
      links.transactions.href='v1/accounts/' + id + '/transactions';
    }
    next();
  });

};
