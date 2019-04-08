Vue.component('v-autocompleter', {
    props: ["input"],
    computed : {
        results: function () {
            let pattern = new RegExp('^'+this.input, 'i');
            let results = window.animals.filter( function (word) {
                 return pattern.test(word);
            });
            return results.length > 9 ? results.slice(0, 10) : results;
        }
    },
    template:
        `<div class="autocompleter">
          <table class ="autocomplete-results">
             <tr class="autocomplete-result"
                   v-for="(result, i) in results" :key="i">{{ result }}</tr>
          </table>
        </div>`
})

    new Vue({
        el: ".main",
        data: function () {
            return {
                inputContent: "",
                showAutocompleter: this.inputContent ? true : false
            }
        }
    })

    new Vue({
        el: ".n2",
        data: function () {
            return {
                inputContent: "",
                showAutocompleter: this.inputContent ? true : false
            }
        }
    })
