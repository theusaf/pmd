export default function getFolderLetter(service) {
    const firstLetter = service.trim().at(0).toUpperCase();
    if (firstLetter.match(/[A-Z]/))
        return firstLetter;
    if (firstLetter.match(/[0-9]/))
        return "0-9";
    return "#";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rm9sZGVyTGV0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9nZXRGb2xkZXJMZXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxlQUFlLENBQUMsT0FBZTtJQUNyRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXhELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFBRSxPQUFPLFdBQVcsQ0FBQztJQUNuRCxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDN0MsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIn0=