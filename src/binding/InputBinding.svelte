<script>
    let text = ""
    let number = 3
    let checked = false
    let fruits = ['Apple', 'Banana', 'Cherry']
    let selectedFruits = []
    let group = 'Banana'
    let textarea = ''
    let select = 'Banana'
    let multipleSelect = ['Banana', 'Cherry']
</script>

<!-- let text = '' -->
<section>
    <h2>Text</h2>
    <input type="text" bind:value={text} />
</section>

<!-- let number = 3 -->
<section>
    <h2>Number/Range</h2>
    <div>
        <input type="number" bind:value={number} min=0 max=10 />
    </div>
    <div>
        <input type="range" bind:value={number} min=0 max=10 />
    </div>
</section>

<!-- let checked = false -->
<section>
    <h2>Checkbox</h2>
    <input type="checkbox" bind:checked={checked} /> Agree?
    <label>
        <input type="checkbox" bind:checked={checked} /> Agree?(label wrapping)
    </label>
</section>

<!-- let fruits = ['Apple', 'Banana', 'Cherry'] -->
<!-- let selectedFruits = [] -->
<section>
    <h2>Checkbox 다중 선택</h2>
    <strong>Selected:  {selectedFruits}</strong>
    {#each fruits as fruit}
        <label>
            <input type="checkbox" value={fruit} bind:group={selectedFruits} />
            {fruit}
        </label>
    {/each}
</section>

<!-- let group = 'Banana' -->
<section>
    <h2>Radio</h2>
    <strong>Selected: {group}</strong>
    {#each fruits as fruit}
        <label>
            <input type="radio" value={fruit} bind:group={group} />
            {fruit}
        </label>
    {/each}
</section>

<!-- let textarea = '' -->
<section>
    <h2>Textarea</h2>
    <pre>{textarea}</pre>
    <textarea bind:value={textarea}></textarea>
</section>

<!-- let select = 'Banana' -->
<section>
    <h2>Select 단일 선택</h2>
    <strong>Selected: {select}</strong>
    <div>
        <select bind:value={select}>
            <option disabled value="">Please select one!</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
        </select>
    </div>
</section>

<!-- let multipleSelect = ['Banana', 'Cherry']  -->
<section>
    <h2>Select 다중 선택(Multiple)</h2>
    <strong>Selected: {multipleSelect}</strong>
    <div>
        <select multiple bind:value={multipleSelect}>
            <option disabled value="">Please select one!</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
        </select>
    </div>
</section>
