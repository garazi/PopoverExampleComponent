public with sharing class AccountContactsController {
	@AuraEnabled
    public static List<Account> getAccountContacts (Id recordId) {
            List<Account> contacts = [
                SELECT Account.Name,(SELECT Contact.FirstName, Contact.LastName, Contact.Phone, Contact.Email FROM contacts) FROM Account WHERE Id=:recordId
            ];
            return contacts;
    }
}