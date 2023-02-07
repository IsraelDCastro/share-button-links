<template>
  <div id="whatsapp" class="p-8 bg-whatsapp/5">
    <h3 class="text-whatsapp mb-4">Whatsapp</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="w-full">
        <h4 class="mb-3 font-medium">Usage</h4>
        <ButtonWhatsapp
          text="Whatsapp"
          url="Here add your URL"
          message="Type a message here..."
          isRounded
          hasIcon
          class="mb-4"
        />
        <Code :code="code" language="html"/>
      </div>
      <div class="w-full">
        <h4 class="mb-2 font-medium">Props</h4>
        <p class="mb-3">With <span class="text-red-500">*</span> is required.</p>
        <div class="table-container">
          <table >
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>text<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>Add text</td>
                <td class="desc">
                  <span>The text of the button/link.</span>
                </td>
              </tr>
              <tr>
                <td>url<span class="text-red-500">*</span></td>
                <td>String</td>
                <td>#!</td>
                <td class="desc">
                  <span>The url of the button/link to share.</span>
                </td>
              </tr>
              <tr>
                <td>message</td>
                <td>String</td>
                <td>Empty</td>
                <td class="desc">
                  <span>Here you can add a message when you share the url to Whatsapp.</span>
                </td>
              </tr>
              <tr>
                <td>isRounded</td>
                <td>Boolean</td>
                <td>false</td>
                <td class="desc">
                  <span>Add little rounded corners.</span>
                </td>
              </tr>
              <tr>
                <td>hasIcon</td>
                <td>Boolean</td>
                <td>false</td>
                <td class="desc">
                  <span>Add the whatsapp icon.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import Code from "../Code.vue";
  import ButtonWhatsapp from "@/components/buttons/ButtonWhatsapp.vue";
  const code = `
  <ButtonWhatsapp
    text="..."
    url="..."
    message="..."
    isRounded
    hasIcon
  />`
</script>