export const myScrollTo = (id : string) => {
    const element_to_scroll_to = document.getElementById(id);
    console.log(`Scroll to ${id}`);
    if (element_to_scroll_to != null) {
        console.log(`${id} element found`);
        element_to_scroll_to.scrollIntoView();
    }
}

export const myScrollToWithOffset = (id : string, offset : number) => {
    const element_to_scroll_to = document.getElementById(id);
    if(element_to_scroll_to != null && id != null) {
        const y = element_to_scroll_to.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}