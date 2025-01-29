import { test, expect } from '@playwright/test';

test('login', async({ page }) => {

await page.goto('https://crm-frontend-vitalea-pruebas.azurewebsites.net/home')
await page.locator("input[formcontrolname$='usuario']").type("etorres")
await page.locator("input[formcontrolname$='contrasena']").type("EAyamaTK1989*1")
await page.selectOption('#SelSede','SEDE VITALEA CALLE 93') 
await page.locator("//button[normalize-space()='Ingrese']").click()
await page.pause()

});

test('test', async ({ page }) => {
  await page.goto('https://crm-frontend-vitalea-pruebas.azurewebsites.net/login');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('etorres');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('EAyamaTK1989*1');
  await page.locator('#SelSede').selectOption('16');
  await page.getByRole('button', { name: 'Ingrese' }).click();
  await page.locator('#active1').click();
  await page.getByRole('link', { name: 'Pacientes' }).click();
  await page.locator('#SelTipDoc').selectOption('1');
  await page.getByRole('textbox', { name: 'Número De Documento' }).click();
  await page.getByRole('textbox', { name: 'Número De Documento' }).fill('2020187368');
  await page.locator('#btnshare').first().click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Actualizar' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Solicitud', { exact: true }).nth(1).click();
  await page.locator('#contenedor1').getByText('Siguiente').click();
  await page.locator('div').filter({ hasText: /^Planes Disponibles \*$/ }).click();
  await page.locator('#PlanesAutocomplete').getByPlaceholder('Buscar Planes').click();
  await page.getByText('-COLCAN VITALEA').click();
  await page.getByText('Usar plan').click();
  await page.locator('#selopciones').selectOption('2');
  await page.getByPlaceholder(' Buscar examen ').click();
  await page.getByPlaceholder(' Buscar examen ').fill('h85');
  await page.getByText('H85 - CUADRO HEMATICO').click();

});

