# Project Prompt 1

## Foreward
We have learned enough about React to make a competent application. It’ll be an amalgamation of all concepts we’ve learned to this point, not including requests. You will have around a week to complete the project, but you will be working with a partner. Both partners should submit a project on Populi, and a partner evaluation will be sent out. This partner evaluation will be taken very seriously when it comes to the final grade for the project

## Prompt
We are going to be modeling a grocery catalogue of sorts that will allow us to edit, delete, and add new items to our grocery store. The application will also have search functionality that when executed will return all the items that have the word in the item title (more later). The application should be a single page application that has several components in it, which will also be detailed further below. The application should have sufficient styling and should have pagination of some sort in terms of the items. Your state will be managing all of the data within the application. Your items in the catalogue will follow the following format:

Item {
	Name: “”,
	Price: “”,
	ImageLink: “”,
	Description: “”
}







## Components
These are a list of components that I expect to see to some degree. I would like a component written for each of these, but you can create additional components if you so choose. Also, some of these components will be mapped, so they will appear several times, while some others will only appear once.
## Adding Controls
This component will house the adding of items. The controls should not be on the page initially, but when a button is clicked, the component will appear with input fields for all the different properties of an item object. The field will only collapse/disappear when the button that showed the component is clicked again.
## Edit Controls
These controls will allow you to edit items that already exist. This component will be similar to the addition control, but will include a select that will list the items, and when the item is selected, will pre populate the input fields. When submitted, the item will be changed, and the display will be closed by a button. The show adding controls button and the show edit controls buttons are different.
## Item Display
This component will be the component that displays the information of a single item. This component should be styled in a way that all images are consistent, and images are not inconsistent from one to the next. You can delete items by pressing a button in the top right corner of the item card.

## Search Component
This component will filter the items so that only the relevant items show up. The main item display will be filtered using whatever word is searched up. The filter will work as an onChange function, and will actively filter results while typing into the field. When the field is empty, all of the results should render. The search will be filtering based off of the item name only!

Example:

There are 5 items in the main catalogue. When the word green is searched, only 2 items are rendered on the page. The items that do not have the word in it will not be rendered, but still exist.
# Features
## Search
You will need to do some sort of indexing on your array with this function. I highly recommend using the filter function along with another function/algo to determine whether or not the given string/character exists within the item name.

## Pagination
As the number of items grows, so too will the amount of items rendered on the page. In terms of how you want to go about paginating the items, you can create an outer component to help, or do it within your container, but no more than 10 items should render on the page at any given time. You can have numbers at the bottom that when pressed will render different parts of the item catalogue, or you can just have arrows that will help with the pagination. However you choose to go about it is up to you!








