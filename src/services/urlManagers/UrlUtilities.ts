export default class UrlUtilities {

    //
    // convert paramters from a URL
    // to a dictionary 
    //
    static convertParamsToDictionary(params: string): { [name: string]: string } {
        var keyValueArray = params
            .slice(1)
            .split('&')
            .map(p => p.split('='));

        var dictionary: { [name: string]: string } = {};
        keyValueArray.forEach((kvp) => {
            dictionary[kvp[0]] = kvp[1];
        });
        return dictionary;
    }
}