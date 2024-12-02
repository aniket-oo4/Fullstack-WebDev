//Loop: 1 to 10; skip at 6.
for (var i = 1; i <= 10; i++)
{
  if (i == 6)
  {
    console.log( "6 skipped  beacuse of continue statement ");
    continue; //skip the current iteration; but jump to next iteration
  }
  console.log(i);
}
